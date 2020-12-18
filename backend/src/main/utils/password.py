from sqlalchemy import Text, TypeDecorator
from passwordhash import PasswordHash


class Password(TypeDecorator):
    impl = Text

    def __init__(self, rounds=12, **kwargs):
        self.rounds = rounds
        super(Password, self).__init__(kwargs)

    def process_bind_param(self, value, dialect):
        """
        Ensure the value is a PasswordHash and then return its hash
        """
        return self._convert(value).hash

    def process_result_value(self, value, dialect):
        """
        Convert the hash to the PasswordHash, if it is not NULL
        """
        if value is not None:
            return PasswordHash(value)

    def validator(self, password):
        """
        Provides a validator/convertor for @validates usage
        """
        return self._convert(password)

    def _convert(self, value):
        """
        Convert a string into PasswordHash
        PasswordHash instances or None values will return unchanged
        Strings will be hashed and the resulting PasswordHash returned
        Any other input return an TypeError

        :param value: the string password
        :return: a PasswordHash
        """
        if isinstance(value, PasswordHash):
            return value
        elif isinstance(value, str):
            return PasswordHash.new(value, self.rounds)
        elif value is not None:
            raise TypeError(f"Cannot convert {value} to a PasswordHash")

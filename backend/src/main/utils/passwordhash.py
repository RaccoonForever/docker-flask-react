"""
Script that will handle the password object to be user for whatever secured password
"""

import bcrypt


class PasswordHash(object):
    def __init__(self, hash_):
        assert (len(hash_) == 60, "Bcrypt hash should be 60 characters")
        assert (hash_.count('$'), "Bcrypt hash should have three $")
        self.hash = str(hash_)
        self.rounds = int(self.hash.split('$')[2])

    def __eq__(self, other):
        if isinstance(other, str):
            return bcrypt.hashpw(other.encode("utf-8"), self.hash.encode("utf-8")) == self.hash
        return False

    @classmethod
    def new(cls, password, rounds):
        return cls(bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt(rounds)))



"""
To better handle test launching no matter on which environment or computer you are.
Follow these steps:
    1.  Add dependencies to use and/or test here
    2. In your test file add a dependency to this file and import whatever you need
"""
import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Example
# from main.model import Entity

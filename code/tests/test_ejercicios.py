#!/usr/bin/python
import unittest
from pymongo.connection import MongoClient

class TestWorkspacesManagement(unittest.TestCase):
    def setUp(self):
        conn = MongoClient()
        db = conn.reddit
        data_collection = db.posts
        self.ej_result = lambda res_name, mask: getattr(db, res_name).find(mask)

    def test_ejercicio_1(self):
        res = self.ej_result('ej1', {'_id':'vote-trend'}).next()
        self.assertEquals(78, int(res['value']), 'Tendencia de comunidad erronea')


if __name__ == '__main__':
    unittest.main() 

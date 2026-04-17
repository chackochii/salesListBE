import db from '../index.js';

const { Country } = db;

export const getAllCountries = async () => {
  return await Country.findAll({
    attributes: ['CountryID', 'CountryName'],
    order: [['CountryName', 'ASC']]
  });
};
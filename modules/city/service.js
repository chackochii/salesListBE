import db from '../index.js';

const { City } = db;

export const getCitiesByCountry = async (countryId) => {
  return await City.findAll({
    where: { CountryID: countryId },
    attributes: ['CityID', 'CityName', 'CountryID'],
    order: [['CityName', 'ASC']]
  });
};
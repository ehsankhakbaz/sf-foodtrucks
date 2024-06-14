import { facilityQueries } from './facility/index.js';

const resolvers = {
  Query: {
    ...facilityQueries,
  },
};

export default resolvers;
const axios = require('axios');

const resolvers = {
  Query: {
    async getBorderWaitTime() {
      try {
        const response = await axios.get('https://bwt.cbp.gov/api/bwts');
        const data = response.data;

        // Mapear los datos a un formato más claro
        return data.map(entry => ({
          portName: entry.port_name,
          portCode: entry.port_code,
          delayMinutes: entry.delay_minutes,
          lastUpdated: entry.last_update
        }));
      } catch (error) {
        console.error('Error fetching border wait times:', error.message);
        throw new Error('Failed to fetch border wait times');
      }
    }
  }
};

module.exports = resolvers;
const axios = require('axios');

const resolvers = {
  Query: {
    async getWaitTimes() {
      try {
        // Realiza la solicitud a la API de CBP
        const response = await axios.get('https://bwt.cbp.gov/api/waittimes');
        const data = response.data;

        // Mapea los datos según la estructura
        return data.map((port) => ({
          border: port.border,
          portName: port.port_name,
          crossingName: port.crossing_name,
          hours: port.hours,
          date: port.date,
          time: port.time,
          portStatus: port.port_status,
          commercialVehicleLanes: port.commercial_vehicle_lanes.maximum_lanes,
          passengerVehicleLanes: port.passenger_vehicle_lanes.maximum_lanes,
          pedestrianLanes: port.pedestrian_lanes.maximum_lanes,
          constructionNotice: port.construction_notice,
        }));
      } catch (error) {
        console.error('Error fetching wait times:', error.message);
        throw new Error('Failed to fetch wait times');
      }
    },
  },
};

module.exports = resolvers;

import axios from "axios";

const saveAppointment = async (details) => {
    var config = {
        method: 'post',
        url: 'http://localhost:8881/v1/appointment',
        headers: { },
        data: details
    };

    const response = await axios(config);
    if (response.status === 201) {
        return response.data;
    } else {
        return null;
    }
}
export default {
    saveAppointment: saveAppointment,
}
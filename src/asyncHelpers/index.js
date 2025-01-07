import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncHelper = () => {
    const getItem = async (item) => {
        try {
            const response = await AsyncStorage.getItem(item);
            return response;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    const setItem = async (item, value) => {
        try {
            await AsyncStorage.setItem(item, value);
            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    const getObjectItem = async (item) => {
        try {
            const response = await AsyncStorage.getItem(item);
            return JSON.parse(response);
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    const setObjectItem = async (item, value) => {
        try {
            const stringify = JSON.stringify(value);
            await AsyncStorage.setItem(item, stringify);
            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    const removeItem = async (item) => {
        try {
            await AsyncStorage.removeItem(item);
            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        }
    }

    return {getItem, setItem, removeItem, getObjectItem, setObjectItem};
}

export default AsyncHelper;
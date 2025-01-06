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

    return {getItem, setItem};
}

export default AsyncHelper;
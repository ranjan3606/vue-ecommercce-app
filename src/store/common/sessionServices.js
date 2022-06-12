/* eslint-disable no-empty */
const sessionService = {
    /**
     * [Public] This method used for get data
     * @author Ranjan Kumar <ranjan17@navgurukul.org> 
     */
    localStorage(resource) {
        if (resource && resource.key && resource.method == 'GET') {
            try {
                let storageData = JSON.parse(window.localStorage.getItem(resource.key));
                return { success: true, message: null, data: storageData };
            } catch (error) {
                return { success: false, message: error.message, data: null };
            }
        } else if (resource.method == 'POST') {
            let storageData = JSON.parse(window.localStorage.getItem(resource.key));
            if (storageData) {
                storageData.push(resource.data);
                // Removing duplicate data from array
                const data = Array.from(new Set(storageData.map(JSON.stringify))).map(JSON.parse);
                // saving data into localStorage After Removing duplicate;
                window.localStorage.setItem(resource.key, JSON.stringify(data));
                return { success: true, message: 'Save Successfully', data: data };
            } else {
                let emptyBlock = [];
                emptyBlock.push(resource.data);
                window.localStorage.setItem(resource.key, JSON.stringify(emptyBlock));
                return { success: true, message: 'Save Successfully', data: emptyBlock };
            }
        } else if (resource.method == 'DELETE') {
            // saving data into localStorage After delete data;
            let storageData = JSON.parse(window.localStorage.getItem(resource.key));
            if (storageData && storageData.length) {
                let foundIndex = storageData.findIndex(ele => ele.id == resource.id);
                if (!foundIndex || foundIndex < 0) {
                    return { success: false, message: 'Wrong ID Provided!', data: null };
                }
                storageData.splice(foundIndex, 1);
                window.localStorage.setItem(resource.key, JSON.stringify(storageData));
                return { success: true, message: 'Object Deleted!!', data: null };
            }
        } else if (resource.method == 'DELETE_ALL') {
            // localStorage After delete all  data;
            window.localStorage.removeItem(resource.key);
        }
    },

};

export default sessionService;
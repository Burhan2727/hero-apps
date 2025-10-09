// get locale storage
const getFromLocaleStorage = ()=>{
    const storedAppString = localStorage.getItem("installedApp");
    if(storedAppString){
        const storedApp = JSON.parse(storedAppString);
        return storedApp
    }
    return [];
}
// save function to locale storage
const saveToLocaleStorage = (updatedSaved)=>{
    const appsDaraStringified = JSON.stringify(updatedSaved);
    localStorage.setItem("installedApp", appsDaraStringified);
}
// add function for locale storage
const addItemToLocaleStorage = (findInstallData)=>{
    const saved = getFromLocaleStorage();
    // cart.push(id);
    const updatedSaved = [...saved, findInstallData]
    saveToLocaleStorage(updatedSaved)
}

// Remove cart to localeStorage
const removeFromLocaleStorge = (id)=>{
    const storedApps = getFromLocaleStorage();
    const remainingApps = storedApps.filter(singleItem => singleItem.id !== id)
    saveToLocaleStorage(remainingApps)
}

export {
    getFromLocaleStorage , 
    addItemToLocaleStorage ,
    removeFromLocaleStorge ,
    saveToLocaleStorage
}

const validateLocalStorageItemExistence = (item: string): boolean => localStorage.getItem(item) !== null;

export default validateLocalStorageItemExistence;
import apiService from "./";

const StoreService = {
	async getAllProducts() {
		return apiService.get("/");
	},

	async getProductInfo(id) {
		return apiService.get(`/${id}`);
	},
};

export default StoreService;

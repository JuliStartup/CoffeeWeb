import apiService from "./";

const StoreService = {
	async getAllProducts() {
		return apiService.get("/");
	},

	async getProductInfo(id) {
		return apiService.get(`/${id}`);
	},

	async addSubscriptionPlan(data) {
		return apiService.post("/", data);
	},
};

export default StoreService;

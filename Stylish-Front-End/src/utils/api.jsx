const api = {
  hostname: "https://api.appworks-school.tw/api/1.0",
  newhostname: "https://www.joazen.website/api",

  async getProducts(category, paging) {
    const response = await fetch(
      `${this.newhostname}/products/search?category=${category}&paging=${paging}`,
    );
    const result = await response.json();
    return result;
  },

  async getRecommendation() {
    const response = await fetch(`${this.newhostname}/products/recommendation`);
    const result = await response.json();
    return result;
  },

  async getCampaigns() {
    const response = await fetch(`${this.hostname}/marketing/campaigns`);
    return await response.json();
  },

  async searchProducts(keyword, paging) {
    const response = await fetch(
      `${this.hostname}/products/search?keyword=${keyword}&paging=${paging}`,
    );
    return await response.json();
  },

  async getParticularProducts(endpoint, paging) {
    const response = await fetch(`${endpoint}&paging=${paging}`);
    return await response.json();
  },

  async getProduct(id) {
    const response = await fetch(
      `${this.newhostname}/products/details?id=${id}`,
    );
    return await response.json();
  },

  async checkout(data, jwtToken) {
    const response = await fetch(`${this.hostname}/order/checkout`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      }),
      method: "POST",
    });
    return await response.json();
  },

  async signin(data) {
    const response = await fetch(`${this.hostname}/user/signin`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: "POST",
    });
    return await response.json();
  },

  async getProfile(jwtToken) {
    const response = await fetch(`${this.hostname}/user/profile`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      }),
    });
    return await response.json();
  },
};

export default api;

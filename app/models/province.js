const query = {
    getAll: "SELECT * FROM province",
    getById: "SELECT * FROM province WHERE id = $1",
    post: "INSERT INTO province (province_name, created_at) VALUES ($1, NOW())",
    update: "UPDATE province SET province_name = $1, updated_at = NOW() WHERE id = $2",
    delete: "DELETE FROM province WHERE id = $1"
}

module.exports = query;
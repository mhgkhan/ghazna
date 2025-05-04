export default async function checkIfExists(model, query) {
    try {
        const result = await model.findOne(query).exec();
        if (result) {
            return {
                success: true,
                message: "Record exists",
                data: result,
            };
        } else {
            return {
                success: false,
                message: "Record does not exist",
            };
        }
    }
    catch (error) {
        console.error("Error checking existence:", error);
        return {
            success: false,
            message: "Error checking existence",
            error: error.message || "Unknown error",
        }
        // throw error; // Rethrow the error for handling in the calling function
    }
}
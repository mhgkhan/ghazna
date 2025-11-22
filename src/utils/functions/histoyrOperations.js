import HistoryModel from "../models/HistoryModel";

export async function addHistoryEntry(userId, action) {
    const obj = {}
    try {
        const newEntry = HistoryModel({
            userId,
            action
        });
        const created = await newEntry.save();
        obj.error = false;
        obj.message = "History entry added successfully";
        obj.data = created;
        obj.success = true;
    } catch (error) {
        obj.error = true;
        obj.message = error.message
    } finally {
        return obj;
    }
}
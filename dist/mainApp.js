"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainApp = (app) => {
    try {
        app.get("/", (req, res) => {
            try {
                return res.status(200).json({
                    message: "Welcome to school API",
                });
            }
            catch (error) {
                return res.status(404).json({
                    message: "Error",
                });
            }
        });
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;

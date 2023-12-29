"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var port = process.env.PORT || 4000;
var lists = [];
app.post("/save", function (req, res) {
    lists = req.body.lists;
    return res.json({ success: true });
});
app.get("/load", function (req, res) { return res.json({ lists: lists }); });
app.listen(port, function () {
    return console.log("Kanban backend running on http://localhost:".concat(port, "!"));
});

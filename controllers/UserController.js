import axios from "../axios.js";
//import bcrypt from "bcrypt";

export const login = async (req, res) => {
    try {
        const { data, headers } = await axios.post("/ServiceModel/AuthService.svc/Login", req.body);
        if (data.Code !== 0) {
            return res.status(500).json({
                message: data.Message,
                status: "error"
            });
        }
        // Cookies
        let cookiesMass = []
        let cookies = "";
        headers.get("set-cookie").forEach((cookie) => {
            cookies += cookie + " ";
            cookiesMass.push(cookie);
        })
        //window.localStorage.setItem("Cookie", cookies);
        // BPMCSRF
        //const bpmcsrf = headers.get("set-cookie")[2].split(";")[0].split("=")[1];
        //window.localStorage.setItem("bpmcsrf", bpmcsrf);
        // BCrypt
        //const salt = await bcrypt.genSalt(10);
        //const bpmcsrfHash = bcrypt.hash(bpmcsrf, salt);
        //res.set("BPMCSRF", bpmcsrf);
        //const cookiesHash = bcrypt.hash(cookies, salt);
        //res.set("Cookie", cookies);
        res.set("Set-cookie", cookiesMass);
        res.json({
            message: "Авторизация пройдена успешно",
            status: "success"
        });
    } catch (err) {
        res.status(500).json({
            message: `Ошибка авторизации`,
            status: "error"
        });
    }
};
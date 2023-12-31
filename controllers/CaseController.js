import axios from "axios";
import {agent} from "../axios.js";
// APLANA - c83055bc-eae5-452c-a8a5-64e2fc4f6f70
// ТЕСТОВАЯ ЗАПИСЬ CASE - 30c62ce1-b58b-4ad0-b9e6-0084d25accd2
export const getUserCases = async (req, res) => {
    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
    try {
        //const cookies = req.cookies;
        //const bpmcsrf = req.headers.get("BPMCSRF");
        console.log("COOKIES: ", req.cookies);
        console.log("CSRF: ", req.headers);
        const { data } = await axios.get('https://dev-freshmarket.cloudbpm.ru/0/odata',
            {
                headers: req.headers,
                responseType: 'json',
                responseEncoding: 'utf8',
                httpsAgent: agent
            })
            //await axios(`/0/odata/ITdsTelegramChat(08d48701-16b0-4fd5-a691-f8c72ecf7101)`)

        console.log("Data: ", data);
        // ТУТ в header прийдёт BPMSESSION, который тоже надо закинуть в header по умолчанию
        res.json({
            NONE: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось получить заявки',
        });
    }
};

// export const getOne = async (req, res) => {
//     try {
//         res.json();
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: 'Не удалось получить статьи',
//         });
//     }
// };
//
// export const create = async (req, res) => {
//     try {
//
//
//         res.json();
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: 'Не удалось создать статью',
//         });
//     }
// };
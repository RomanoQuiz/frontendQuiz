import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import axios from "axios"

export function attemps_Number(result) {
    return result.filter(r => r !== undefined).length
}

export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => 10).reduce((prev, curr) => prev + curr, 0)
}

export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints
}

export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.result.userId);
    return auth ? children : <Navigate to='/' replace={true} />;
}

export async function getServerData(url, callback) {
    try {
        const response = await axios.get(url);
        return callback ? callback(response.data) : response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
}

export async function postServerData(url, result, callback) {
    try {
        const response = await axios.post(url, result);
        const data = response.data;
        return callback ? callback(data) : data;
    } catch (error) {
        console.error(`Error posting data to ${url}:`, error);
        throw error;
    }
}


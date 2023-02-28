import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

//number of virtual users and duration
export const options = {
    vus: 5,
    duration: '10s',
};
//request
    const url = 'https://dummy.restapiexample.com/api/v1/employees';
export default function () {
    const res = http.get(url);
    check(res, { 'status was 200': (r) => r.status == 200 });
}
//html report generator
export function handleSummary(data) {
    return {
        "Report.html": htmlReport(data),
    };
}
import React, { useEffect, useState } from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Button,
} from "@material-tailwind/react";

import { PlusIcon } from "@heroicons/react/24/solid";

import AddDailyReport from "./AddDailyReport";
import EditDailyReport from "./EditDailyReport";
import { usePage } from "@inertiajs/react";
import { compareDates } from "@/Utils/helpers";

export default function DailyReport({ reports, date }) {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(date);
    const [report, setReport] = useState();
    const [reportData, setReportData] = useState(reports);

    const user = usePage().props.auth.user;

    const handleOpen = () => setOpen(!open);
    const [editOpen, setEditOpen] = useState(false);

    const [values, setValues] = useState({
        id: " ",
        payments: 0,
        bids: 0,
        new_projects: 0,
        new_accounts: 0,
        finished_projects: 0,
        failed_projects: 0,
    });

    const handleEditOpen = (report) => {
        if (report) {
            if (report.user_id === user.name) {
                setReport(report);
                setEditOpen(!editOpen);
            }
        } else {
            setEditOpen(!editOpen);
        }
    };

    useEffect(() => {
        if (reports && date) {
            setSelectedDate(date);

            const filtered = reports.filter((report) => {
                return compareDates(report.date, date);
            });

            setReportData(filtered);
        }
    }, [date, reports]);
    return (
        <div>
            <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 flex items-center justify-between p-6"
                >
                    <div className="flex items-center gap-2">
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="mb-1"
                        >
                            Daily Reports
                        </Typography>
                    </div>
                    <Button className="ml-auto flex gap-2" onClick={handleOpen}>
                        <PlusIcon className="h-4 w-4 stroke-2" />
                        Add
                    </Button>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <div className={open ? "block p-2" : "hidden p-2"}>
                        {open && (
                            <AddDailyReport
                                open={open}
                                handleOpen={handleOpen}
                                user={user}
                                date={selectedDate}
                            />
                        )}
                    </div>
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {[
                                    "No",
                                    "Date",
                                    "User",
                                    "Payments",
                                    "Bids",
                                    "New_Accounts",
                                    "New_projects",
                                    "Finished_projects",
                                    "Closed_projects",
                                ].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                                    >
                                        <Typography
                                            variant="small"
                                            className="text-[11px] font-medium uppercase text-blue-gray-400"
                                        >
                                            {el}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.map((value, key) => {
                                const className = `py-3 px-5 ${
                                    key === reports.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                }`;

                                return (
                                    <tr
                                        key={key}
                                        onClick={() => handleEditOpen(value)}
                                        className="cursor-pointer"
                                    >
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {key + 1}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.date}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.user_id}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.payments}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.bids}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.new_accounts}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.new_projects}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.finished_projects}
                                            </Typography>
                                        </td>
                                        <td className={className}>
                                            <Typography
                                                variant="small"
                                                className="text-xs font-medium text-blue-gray-600"
                                            >
                                                {value.failed_projects}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
            <EditDailyReport
                open={editOpen}
                handleOpen={setEditOpen}
                report={report}
                values={values}
                setValues={setValues}
            />
        </div>
    );
}

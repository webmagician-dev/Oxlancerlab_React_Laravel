import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Checkbox,
    Select,
    Option,
    Popover,
    PopoverHandler,
    PopoverContent,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { usePage } from "@inertiajs/react";

import {
    PlusIcon,
    HomeIcon,
    CalendarIcon,
    CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export default function DailyReport({ reports }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
            >
                <div className="flex items-center gap-2">
                    <Typography variant="h4" color="blue-gray" className="mb-1">
                        Daily Reports
                    </Typography>
                </div>
                <Button className="ml-auto flex gap-2" onClick={handleOpen}>
                    <PlusIcon className="h-4 w-4 stroke-2" />
                    Add
                </Button>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                    <thead>
                        <tr>
                            {[
                                "No",
                                "Date",
                                "User",
                                "Payments",
                                "Bids",
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
                        {reports.map((value, key) => {
                            const className = `py-3 px-5 ${
                                key === reports.length - 1
                                    ? ""
                                    : "border-b border-blue-gray-50"
                            }`;

                            return (
                                <tr key={key}>
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
                                            {value.bids}
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
                                    <td className={className}>
                                        <Typography
                                            variant="small"
                                            className="text-xs font-medium text-blue-gray-600"
                                        >
                                            {value.date}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}

import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
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

import AddDailyReport from "./AddDailyReport";
import EditDailyReport from "./EditDailyReport";
import DailyReport from "./DailyReport";
import PaymentReport from "./PaymentReport";
import moment from "moment";

export default function Report() {
    const reports = usePage().props.reports;
    const payments_reports = usePage().props.payments_reports;
    const [date, setDate] = useState();
    const [page, setPage] = useState("daily");

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const handleTabClick = (e, value) => {
        e.preventDefault();
        setPage(value);
    };

    const convertDate = (date) => {
        let dt = new Date(date);

        return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
    };

    useEffect(() => {
        setDate(moment());
    }, []);
    return (
        <>
            <AuthenticatedLayout title={"Reports"}>
                <div className="relative mt-8 h-37 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
                    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
                </div>
                <div className="flex items-center justify-end gap-2 p-2 w-full bg-white rounded-2xl">
                    <div className="w-50">
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Input
                                    label="Select date"
                                    onChange={() => null}
                                    value={date ? format(date, "PPP") : ""}
                                />
                            </PopoverHandler>
                            <PopoverContent>
                                <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    showOutsideDays
                                    className="border-0"
                                    classNames={{
                                        caption:
                                            "flex justify-center py-2 mb-4 relative items-center",
                                        caption_label:
                                            "text-sm font-medium text-gray-900",
                                        nav: "flex items-center",
                                        nav_button:
                                            "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                        nav_button_previous:
                                            "absolute left-1.5",
                                        nav_button_next: "absolute right-1.5",
                                        table: "w-full border-collapse",
                                        head_row:
                                            "flex font-medium text-gray-900",
                                        head_cell:
                                            "m-0.5 w-9 font-normal text-sm",
                                        row: "flex w-full mt-2",
                                        cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                        day: "h-9 w-9 p-0 font-normal",
                                        day_range_end: "day-range-end",
                                        day_selected:
                                            "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                        day_today:
                                            "rounded-md bg-gray-200 text-gray-900",
                                        day_outside:
                                            "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                        day_disabled:
                                            "text-gray-500 opacity-50",
                                        day_hidden: "invisible",
                                    }}
                                    components={{
                                        IconLeft: ({ ...props }) => (
                                            <ChevronLeftIcon
                                                {...props}
                                                className="h-4 w-4 stroke-2"
                                            />
                                        ),
                                        IconRight: ({ ...props }) => (
                                            <ChevronRightIcon
                                                {...props}
                                                className="h-4 w-4 stroke-2"
                                            />
                                        ),
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex">
                        <div className="w-96">
                            <Tabs value="daily">
                                <TabsHeader>
                                    <Tab
                                        value="daily"
                                        onClick={(e) =>
                                            handleTabClick(e, "daily")
                                        }
                                    >
                                        <CalendarIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                                        Daily Report
                                    </Tab>
                                    <Tab
                                        value="payment"
                                        onClick={(e) =>
                                            handleTabClick(e, "payment")
                                        }
                                    >
                                        <CurrencyDollarIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                                        Payment Report
                                    </Tab>
                                </TabsHeader>
                            </Tabs>
                        </div>
                    </div>
                </div>
                {page === "daily" && (
                    <DailyReport reports={reports} date={convertDate(date)} />
                )}
                {page === "payment" && (
                    <PaymentReport
                        payments_reports={payments_reports}
                        date={convertDate(date)}
                    />
                )}
            </AuthenticatedLayout>
        </>
    );
}

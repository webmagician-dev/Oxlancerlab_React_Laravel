import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
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
    Tabs,
    TabsHeader,
    Tab,
    Select,
    Option,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { usePage } from "@inertiajs/react";
import {
    HomeIcon,
    CheckIcon,
    EllipsisVerticalIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Project() {
    const user = usePage().props.auth.user;
    const projects = usePage().props.projects;
    const [date, setDate] = useState();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    const [project, setProject] = useState({ title: "", description: "" });

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setProject({ ...project, [name]: value });
    }

    async function savePost() {
        try {
            console.log("--running--");
            alert("12341234");
            let data = await axios.post(
                "http://localhost:8000/projects/add-project"
            );
            alert("safs");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <AuthenticatedLayout title={"Projects"}>
                <div className="flex mt-8 h-87 w-full justify-center overflow-hidden rounded-xl">
                    <div className="md:w-2/3 w-full flex justify-center mb-3">
                        <div className="flex md:flex-row flex-col items-center justify-between py-2 px-4 mb-2 h-full bg-gray-300 rounded-md w-full">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-1"
                            >
                                My Projects:
                            </Typography>
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-1"
                            >
                                Open:
                                <span className="mx-2 text-2xl text-blue-600">
                                    1
                                </span>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-1"
                            >
                                Finished:
                                <span className="mx-2 text-2xl text-green-600">
                                    1
                                </span>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-1"
                            >
                                Closed:
                                <span className="mx-2 text-2xl text-red-600">
                                    1
                                </span>
                            </Typography>
                        </div>
                    </div>
                </div>
                <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 flex items-center justify-between p-6"
                    >
                        <div className="flex items-center justify-between w-1/2">
                            <Typography
                                variant="h3"
                                color="blue-gray"
                                className="mb-1"
                            >
                                Projects
                            </Typography>
                            <div className="flex items-center gap-2">
                                <Popover placement="bottom">
                                    <PopoverHandler>
                                        <Input
                                            label="From"
                                            onChange={() => null}
                                            value={
                                                date ? format(date, "PPP") : ""
                                            }
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
                                                nav_button_next:
                                                    "absolute right-1.5",
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
                                <Popover placement="bottom">
                                    <PopoverHandler>
                                        <Input
                                            label="To"
                                            onChange={() => null}
                                            value={
                                                date ? format(date, "PPP") : ""
                                            }
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
                                                nav_button_next:
                                                    "absolute right-1.5",
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
                        </div>
                        <div className="flex items-center">
                            <div className="w-96">
                                <Tabs value="app">
                                    <TabsHeader>
                                        <Tab value="app">
                                            <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                                            Open
                                        </Tab>
                                        <Tab value="message">
                                            <CheckIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                                            Finished
                                        </Tab>
                                        <Tab value="settings">
                                            <XMarkIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                                            Closed
                                        </Tab>
                                    </TabsHeader>
                                </Tabs>
                            </div>
                            <Menu placement="left-start">
                                <MenuHandler>
                                    <IconButton
                                        variant="text"
                                        color="blue-gray"
                                    >
                                        <EllipsisVerticalIcon
                                            strokeWidth={3}
                                            fill="currenColor"
                                            className="h-6 w-6"
                                        />
                                    </IconButton>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem onClick={handleOpen}>
                                        Add New
                                    </MenuItem>
                                    <MenuItem>Show My projects</MenuItem>
                                    <MenuItem>Show All</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    {[
                                        "Type",
                                        "Project",
                                        "Client_name",
                                        "Client_country",
                                        "Budget",
                                        "Period",
                                        "Got_from",
                                    ].map((el) => (
                                        <th
                                            key={el}
                                            className="border-b border-blue-gray-50 py-3 px-6 text-left"
                                        >
                                            <Typography className="text-[11px] font-medium uppercase text-blue-gray-400">
                                                {el}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((value, key) => {
                                    const className = `py-3 px-5 ${
                                        key === projects.length - 1
                                            ? ""
                                            : "border-b border-blue-gray-50"
                                    }`;

                                    return (
                                        <tr key={value.project_name}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    <Typography
                                                        color="blue-gray"
                                                        className="font-bold"
                                                    >
                                                        {value.type}
                                                    </Typography>
                                                </div>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-medium text-blue-gray-600">
                                                    {value.project_name}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-medium text-blue-gray-600">
                                                    {value.client_name}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-medium text-blue-gray-600">
                                                    {value.client_country}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-medium text-blue-gray-600">
                                                    {value.budget}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-medium text-blue-gray-600">
                                                    {value.period}{" "}
                                                    {value.period_unit}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-medium text-blue-gray-600">
                                                    {value.got_from}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </AuthenticatedLayout>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader>Add project.</DialogHeader>
                <DialogBody>
                    <Card color="transparent" shadow={false}>
                        <form className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Type
                                    </Typography>
                                    <Select size="md">
                                        <Option value="contract">
                                            Contract
                                        </Option>
                                        <Option value="full-time">
                                            Full-time
                                        </Option>
                                        <Option value="internship">
                                            Internship
                                        </Option>
                                        <Option value="project">Project</Option>
                                        <Option value="task">Task</Option>
                                    </Select>
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        project_name
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        your_role
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        your_name
                                    </Typography>
                                    <Input
                                        name="tessasdaft"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        your_country
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        client_name
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        client_country
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        budget
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        period
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        period_unit
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        got_from
                                    </Typography>
                                    <Input
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-2">
                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button>
                                <Button
                                    variant="gradient"
                                    color="green"
                                    type="button"
                                    onClick={savePost}
                                >
                                    <span>Save</span>
                                </Button>
                            </div>
                        </form>
                    </Card>
                </DialogBody>
            </Dialog>
        </>
    );
}

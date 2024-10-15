import React, { useState } from "react";
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
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import { usePage } from "@inertiajs/react";
import {
    CheckCircleIcon,
    EllipsisVerticalIcon,
    HomeIcon,
    CheckIcon,
    CalendarIcon,
} from "@heroicons/react/24/solid";
import { projectsTableData } from "@/Pages/data";

export default function Plan() {
    const user = usePage().props.auth.user;
    const plans = usePage().props.plans;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <AuthenticatedLayout title={"Plans"}>
                <div className="relative mt-8 h-37 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
                    <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
                </div>
                <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 flex items-center justify-between p-6"
                    >
                        <div>
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="mb-1"
                            >
                                Plans
                            </Typography>
                        </div>
                        <div className="flex items-center">
                            <div className="w-96">
                                <Tabs value="app">
                                    <TabsHeader>
                                        <Tab value="app">
                                            <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                                            Week
                                        </Tab>
                                        <Tab value="message">
                                            <CalendarIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                                            Month
                                        </Tab>
                                    </TabsHeader>
                                </Tabs>
                            </div>
                            <Menu placement="left-start">
                                <MenuHandler>
                                    <IconButton
                                        size="sm"
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
                                        Add New Plan
                                    </MenuItem>
                                    <MenuItem>Show My Plans</MenuItem>
                                    <MenuItem>Show All Plans</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <table className="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    {[
                                        "Payments",
                                        "Bids",
                                        "New_projects",
                                        "Period",
                                        "Progress",
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
                                {plans.map((value, key) => {
                                    const className = `py-3 px-5 ${
                                        key === plans.length - 1
                                            ? ""
                                            : "border-b border-blue-gray-50"
                                    }`;

                                    return (
                                        <tr key={name}>
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
                                                    {value.new_projects}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    variant="small"
                                                    className="text-xs font-medium text-blue-gray-600"
                                                >
                                                    {value.period_from}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography
                                                    variant="small"
                                                    className="text-xs font-medium text-blue-gray-600"
                                                >
                                                    {value.period_to}
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
                <DialogHeader>Add plan.</DialogHeader>
                <DialogBody>
                    <Card color="transparent" shadow={false}>
                        <form className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Payments
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
                                        Bids
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
                                        New_projects
                                    </Typography>
                                    <Input
                                        name="test"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                                        labelProps={{
                                            className:
                                                "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                                <div>
                                    <Typography variant="h6" color="blue-gray">
                                        Period_from
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
                                        Period_to
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
                                    type="submit"
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

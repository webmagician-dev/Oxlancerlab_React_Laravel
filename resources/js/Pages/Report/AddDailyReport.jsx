import React, { useState, useEffect } from "react";
import { Typography, Button, Input } from "@material-tailwind/react";
import { router } from "@inertiajs/react";

export default function AddDailyReport({ handleOpen, date }) {
    const [data, setData] = useState({
        payments: 0,
        bids: 0,
        new_projects: 0,
        new_accounts: 0,
        finished_projects: "",
        closed_projects: "",
        date: date,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log("submit data...", data);
        router.post(route("add_report_daily"), data);
    };

    const handleChange = (e) => {
        const key = e.target.id;
        setData({
            ...data,
            [key]: e.target.value,
        });
    };

    useEffect(() => {
        setData({
            payments: 0,
            bids: 0,
            new_projects: 0,
            new_accounts: 0,
            finished_projects: 0,
            closed_projects: 0,
            date: date,
        });
    }, [date]);
    return (
        <form className="w-full" onSubmit={submit}>
            <div className="flex lg:flex-row flex-col justify-between gap-2">
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Payments
                    </Typography>
                    <Input
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="payments"
                        value={data.payments}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        New Accounts
                    </Typography>
                    <Input
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="new_accounts"
                        value={data.new_accounts}
                        onChange={handleChange}
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
                            className: "before:content-none after:content-none",
                        }}
                        id="new_projects"
                        value={data.new_projects}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Bids
                    </Typography>
                    <Input
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="bids"
                        value={data.bids}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Finished Project
                    </Typography>
                    <Input
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="study"
                        value={data.study}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Closed Project
                    </Typography>
                    <Input
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="study"
                        value={data.study}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex p-3 items-bottom">
                    <Button
                        variant="gradient"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1 mt-3"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        type="submit"
                        className="mr-1 mt-3"
                    >
                        <span>Save</span>
                    </Button>
                </div>
            </div>
        </form>
    );
}

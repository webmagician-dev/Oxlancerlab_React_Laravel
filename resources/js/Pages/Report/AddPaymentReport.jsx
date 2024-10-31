import React, { useState, useEffect } from "react";
import {
    Typography,
    Button,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";
import { router } from "@inertiajs/react";
import { convertDate } from "@/Utils/helpers";

export default function AddPaymentReport({
    open,
    handleOpen,
    user,
    date,
    my_projects,
}) {
    const [data, setData] = useState({
        amount: 0,
        project: 0,
        txHash: 0,
        user_id: user.name,
        date: convertDate(date),
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(route("add_report_payment"), data);
    };

    const handleChange = (e) => {
        const key = e.target.id;
        setData({
            ...data,
            [key]: e.target.value,
        });
    };
    const handleSelect = (value) => {
        setData({
            ...data,
            ["project"]: value,
        });
    };
    return (
        <form className="w-full" onSubmit={submit}>
            <div className="flex lg:flex-row flex-col justify-between gap-2">
                <div>
                    <Typography variant="h6" color="blue-gray">
                        Amount
                    </Typography>
                    <Input
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="amount"
                        value={data.amount}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        project
                    </Typography>
                    <Select
                        size="md"
                        id="project"
                        onSelect={handleSelect}
                        onChange={(e) => handleSelect(e)}
                    >
                        {my_projects &&
                            my_projects.map((project, index) => (
                                <Option
                                    value={project.project_name}
                                    name="project"
                                    key={index}
                                >
                                    {project.project_name}
                                </Option>
                            ))}
                    </Select>
                </div>
                <div>
                    <Typography variant="h6" color="blue-gray">
                        TxHash
                    </Typography>
                    <Input
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 min-w-[100px!important]"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        id="txHash"
                        value={data.txHash}
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

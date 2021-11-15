import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/reducer/StaffSlide";
import * as toast from "../../common/toastHelper";

function StaffBox(){
    const StaffList = useSelector((state) => state.staff.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getList());
    },[dispatch()]);

}
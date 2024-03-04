import React from "react";
import { HeadlineBody, Subheadline1 } from "../../../textStyles/TextStyleComponents";
import cl from "./ServicesList.module.css";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useCheckboxStore } from "../../../store/CheckboxStore";


const ServicesList = observer(({ services }) => {
    // const buttonColor = window.Telegram.WebApp.button_color;
    let tg = window.Telegram.WebApp;

    const navigate = useNavigate();

    const checkboxStore = useCheckboxStore();

    const handleCheckboxChange = () => {
        checkboxStore.toggleCheckbox(services.id);
        const checkboxCount = checkboxStore.getSelectedCheckboxCount();



        if (checkboxCount === 1) {
            tg.enableClosingConfirmation();
            tg.MainButton.text = "Далее";
            tg.MainButton.show();
            tg.MainButton.onClick(() => {
            navigate("/selectTime");
            tg.MainButton.hide();
        });
        } else if (checkboxCount === 0) {
            tg.MainButton.hide();
            tg.disableClosingConfirmation();
        } else {
            tg.MainButton.text = "Далее (" + checkboxCount + " выбрано)";
        }

        // if (Object.values(checkboxStore.checkboxes).every(value => !value)) {
        //     tg.MainButton.hide();
        //     tg.disableClosingConfirmation();
        // }

    };

    return (
        <div>
            <label htmlFor={services.id}>
                <div className={cl.elem}>
                    <div className={cl.containerForCheckbox}>
                        <input
                            type="checkbox"
                            id={services.id}
                            className={cl.chbx}
                            checked={checkboxStore.checkboxes[services.id] || false}
                            onChange={handleCheckboxChange}
                        />
                    </div>

                    <div className={cl.textbtndiv}>
                        <div className={cl.text}>
                            {/* <HeadlineBody className={cl.hdlnbd}>Для одной строки есть специальное свойство text-overflow со значением ellipsis, которое добавляет многоточие в конце текста. Чтобы это свойство работало, нужно соблюсти ещё два условия.</HeadlineBody> */}
                            <HeadlineBody className={cl.hdlnbd}>{services.name}</HeadlineBody>
                            <Subheadline1 className={cl.sbhdln}>{services.price + " / " + services.time}</Subheadline1>
                        </div>


                        <button
                            className={cl.btn}
                            onClick={() => {
                                navigate(`/info/${services.id}`);
                                tg.MainButton.hide();
                            }}>
                            <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9917 26.8145C9.80745 26.8145 8.67578 26.6291 7.59668 26.2583C6.52311 25.8931 5.53532 25.3784 4.6333 24.7144C3.73128 24.0503 2.94824 23.2673 2.28418 22.3652C1.62012 21.4632 1.1027 20.4727 0.731934 19.3936C0.366699 18.3145 0.184082 17.1855 0.184082 16.0068C0.184082 14.8226 0.366699 13.6937 0.731934 12.6201C1.09717 11.541 1.61182 10.5505 2.27588 9.64844C2.94548 8.74642 3.72852 7.96338 4.625 7.29932C5.52702 6.62972 6.51481 6.1123 7.58838 5.74707C8.66748 5.3763 9.79915 5.19092 10.9834 5.19092C12.1676 5.19092 13.2993 5.3763 14.3784 5.74707C15.4575 6.1123 16.4481 6.62972 17.3501 7.29932C18.2521 7.96338 19.0352 8.74642 19.6992 9.64844C20.3688 10.5505 20.8862 11.541 21.2515 12.6201C21.6222 13.6937 21.8076 14.8226 21.8076 16.0068C21.8076 17.1855 21.6222 18.3145 21.2515 19.3936C20.8862 20.4727 20.3688 21.4632 19.6992 22.3652C19.0352 23.2673 18.2521 24.0503 17.3501 24.7144C16.4481 25.3784 15.4575 25.8931 14.3784 26.2583C13.3049 26.6291 12.1759 26.8145 10.9917 26.8145ZM10.9917 25.2705C12.021 25.2705 12.9977 25.1128 13.9219 24.7974C14.8516 24.4875 15.701 24.0503 16.4702 23.4858C17.245 22.9214 17.9146 22.2546 18.479 21.4854C19.0435 20.7106 19.4806 19.8612 19.7905 18.937C20.1004 18.0073 20.2554 17.0306 20.2554 16.0068C20.2554 14.9775 20.1004 14.0008 19.7905 13.0767C19.4806 12.147 19.0407 11.2975 18.4707 10.5283C17.9062 9.75358 17.2367 9.08398 16.4619 8.51953C15.6927 7.95508 14.8433 7.5179 13.9136 7.20801C12.9894 6.89811 12.0127 6.74316 10.9834 6.74316C9.95964 6.74316 8.98291 6.89811 8.05322 7.20801C7.12907 7.5179 6.28239 7.95508 5.51318 8.51953C4.74398 9.08398 4.07715 9.75358 3.5127 10.5283C2.94824 11.2975 2.51107 12.147 2.20117 13.0767C1.89128 14.0008 1.73633 14.9775 1.73633 16.0068C1.73633 17.0306 1.89128 18.0073 2.20117 18.937C2.51107 19.8612 2.94824 20.7106 3.5127 21.4854C4.08268 22.2546 4.75228 22.9214 5.52148 23.4858C6.29069 24.0503 7.13737 24.4875 8.06152 24.7974C8.99121 25.1128 9.96794 25.2705 10.9917 25.2705ZM9.09082 21.9502C8.90267 21.9502 8.74219 21.8893 8.60938 21.7676C8.4821 21.6403 8.41846 21.4826 8.41846 21.2944C8.41846 21.1118 8.4821 20.9596 8.60938 20.8379C8.74219 20.7106 8.90267 20.647 9.09082 20.647H10.5518V15.3262H9.24854C9.06038 15.3262 8.8999 15.2653 8.76709 15.1436C8.63981 15.0163 8.57617 14.8586 8.57617 14.6704C8.57617 14.4933 8.63981 14.3411 8.76709 14.2139C8.8999 14.0866 9.06038 14.0229 9.24854 14.0229H11.2905C11.5229 14.0229 11.7 14.0977 11.8218 14.2471C11.9435 14.3965 12.0044 14.5929 12.0044 14.8364V20.647H13.4736C13.6618 20.647 13.8195 20.7106 13.9468 20.8379C14.0796 20.9596 14.146 21.1118 14.146 21.2944C14.146 21.4826 14.0796 21.6403 13.9468 21.7676C13.8195 21.8893 13.6618 21.9502 13.4736 21.9502H9.09082ZM10.917 12.1304C10.5684 12.1304 10.2723 12.0086 10.0288 11.7651C9.78532 11.5216 9.66357 11.2256 9.66357 10.877C9.66357 10.5228 9.78532 10.224 10.0288 9.98047C10.2723 9.73698 10.5684 9.61523 10.917 9.61523C11.2712 9.61523 11.57 9.73698 11.8135 9.98047C12.057 10.224 12.1787 10.5228 12.1787 10.877C12.1787 11.2256 12.057 11.5216 11.8135 11.7651C11.57 12.0086 11.2712 12.1304 10.917 12.1304Z" />
                            </svg>
                        </button>


                    </div>
                </div>
            </label>
        </div>
    )
})

export default ServicesList;
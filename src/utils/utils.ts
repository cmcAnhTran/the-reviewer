import { toast } from "react-toastify";

export function randomUnixNumber() {
    let begin = new Date();
    let end = new Date(begin.getTime());
    begin.setHours(8, 0, 0, 0);
    end.setHours(17, 0, 0, 0);
    return Math.round(Math.random() * (end.getTime() - begin.getTime()) + begin.getTime());
}

export const NotificationToast = ({ type, title }: { type: string, title: string }) => {
    switch (type) {
        case "success":
            return toast.success(title, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        case "error":
            return toast.error(title, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        default:
            return
    }

} 
import Swal, { SweetAlertOptions } from "sweetalert2";

export default function showSweetAlert(options?: SweetAlertOptions) {
  Swal.fire({
    ...options,
    customClass: {
      actions: "bg-slate-100 dark:bg-slate-900",
      htmlContainer: "bg-slate-100 dark:bg-slate-900 ",
      title: "bg-slate-100 dark:bg-slate-900 ",
      icon: "bg-slate-100 dark:bg-slate-900 ",
      confirmButton:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-2 rounded-lg ",
      footer:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
      cancelButton:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-2 rounded-lg ",
      closeButton:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-2 rounded-lg ",
      denyButton:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-2 rounded-lg ",
      image:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
      input:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
      inputLabel:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
      loader:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
      popup:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
      timerProgressBar:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
      validationMessage:
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 ",
    },
    allowEscapeKey: true,
  });
}

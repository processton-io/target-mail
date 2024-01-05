import debounce from 'debounce';

export default {
    computed: {
        $crisp() {
            return (window as any).$crisp;
        },
    },
    methods: {
        debouncer: debounce((callback: () => void) => callback(), 500),

        alertError(message: string, autoClose = 10000) {
            (this as any).$notify(
                {
                    title: 'Error',
                    text: message,
                    type: 'error',
                },
                autoClose
            );
        },

        alertSuccess(message: string, autoClose = 10000) {
            (this as any).$notify(
                {
                    title: 'Success',
                    text: message,
                    type: 'success',
                },
                autoClose
            );
        },

        alertWarning(message: string, autoClose = 10000) {
            (this as any).$notify(
                {
                    title: 'Warning',
                    text: message,
                    type: 'warning',
                },
                autoClose
            );
        },

        alertConfirm(
            message: string,
            success: () => void,
            failure: () => void = () => {},
            autoClose = 10000
        ) {
            (this as any).$notify(
                {
                    title: 'Confirm',
                    text: message,
                    type: 'confirm',
                    success,
                    failure,
                },
                autoClose
            );
        },

        closeAlert() {
            (this as any).$root.alert = {
                type: null,
                autoClose: 0,
                message: '',
                confirmationProceed: null,
                confirmationCancel: null,
            };
        },

        playConfetti() {
            (this as any).$confetti.start({ defaultSize: 6 });
            setTimeout(() => {
                (this as any).$confetti.stop();
            }, 3000);
        },
    },
};

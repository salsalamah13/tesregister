var app = new Vue({
    el: '#app',
    data: {
        tampil: false,
        nama1: '',
        nama2: '',
        email: '',
        password: '',
        tanggal: '',
        kelamin: '', // diperbaiki dari 'kelaman' ke 'kelamin'
        submit: false
    },
    computed: {
        keterangan() {
            if (this.nama1 && this.nama2 && this.email && this.password && this.tanggal && this.kelamin) {
                this.submit = true;
                return "Data sudah lengkap, silahkan lanjutkan";
            } else {
                this.submit = false; // tambahan untuk reset submit jika data tidak lengkap
                return "Silakan lengkapi data!";
            }
        }
    },
    methods: {
        show() {
            this.tampil = true; // langsung assign nilai, tidak perlu return
        },
        tutup() {
            this.tampil = false; // langsung assign nilai, tidak perlu return
        }
    }
});
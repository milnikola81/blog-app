export const dateMixin = {
    methods: {
        formatDate(input, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
            var moment = require('moment');
            return moment(input).format(outputFormat);
        },
        diffForHumans(input) {
            var moment = require('moment');
            return moment(input).fromNow()
        }
    }
}
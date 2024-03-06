

export const calculateTimeAgo = (date) => {
    const currentDate = new Date();
    const postDate = new Date(date);
    const timeDifference = currentDate.getTime() - postDate.getTime();
    const hoursDifference = Math.round(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.round(hoursDifference / 24);

    if (hoursDifference < 24) {
        return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else {
        return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    }
};

export const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return formattedDate;
};

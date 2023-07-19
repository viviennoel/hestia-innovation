import FB from 'fb';

export const postOnFacebook = (text:string, articleImage:{src:string, alt: string}) => {
    const body= {
      text: text,
      articleImage,
    }

    FB.setAccessToken('ACCESS_TOKEN');
    FB.api(
    '/DailyDevTipsBlog/feed',
    'POST',
        { message: 'Testing with api' },
        function (response) {
            console.log(response);
        }
    );
}
# avatar-vue3

This component works as avatar creator just as you might have seen avatars in microsoft teams.
It takes initials from full name and makes a display picture for that.
This components consists of vue3, typescript and css
It is useful when someone doesn't upload a picture in your web app, instead of showing the empty avatar there you can just pass there username or full name in the component and then it will create a picture with there name initials

 - Maximum component has been handled using props and is open source
-  It splits name by spaces and hyphens
-  Maximum length of avatar is 4 characters

# Examples

**Anees** will become **A**
**Anees Baig** will become **AB**
**Mirza Anees Baig** will become **MAB**
**Mirza Anees Baig Barlas** will become **MABB**
**Anees-Baig** will become **AB**

# Usage

    npm install avatar-vue3
In file where you want to use the component add these imports

**In script**

    import {Avatar} from  'avatar-vue3'
    import 'avatar-vue3/style.css'
**In template**

    <Avatar
	    name="John Smith"
	    :radius="10"
	    :size="200"
	    image="https://amymhaddad.s3.amazonaws.com/morocco-blue.png"
    />
or

    <Avatar name="John Smith"/>

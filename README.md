# Exhibition-News

Description: 

![img](https://github.com/J0nnyCheese/Exhibition-News/blob/master/showcase/2019-06-13-11-10-52.gif)

This is my first project after learning fundamentals of HTML, CSS, SQL, and httpservlet. It is a program converting the source website (src="https://19.jxwhxl.cn/mainpages/default.aspx") into a wechat mini program. To make everything work I setup three parts: wechat mini program, java servlet, and MySQL Database. Only the source code for wechat is provided here. Also, WxParse is used to parse html content (https://github.com/icindy/wxParse).

For the servlet part, Tomcat, MySQL Connector, and JSON Convertor were used. I have a VO class packing results sent back from database, a db class which handles connection and SQL query, a DAO class formating the string used for SQL query, and a servlet class that does the servlet request and response.

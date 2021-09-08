#基于nginx 
FROM nginx
#创建文件夹
RUN  mkdir /app
#将编译好的文件内容复制到APP
COPY ./dist /app
#配置nginx 配置
COPY ./nginx.conf /etc/nginx/nginx.conf
#暴露端口
EXPOSE 80
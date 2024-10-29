"use client"
import { useAlertStore } from "@/store/alert";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import React from "react";
type typeAlert = {
    success: "success";
    error: "error";
    warning: "warning";
    info: "info";
    };

const typeAlert:typeAlert = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
    };


export function Notification () {
        const [api, contextHolder] = notification.useNotification();
        const alert =  useAlertStore( state => state.alert);
        const message =  useAlertStore( state => state.alert.message);
          const openNotification = (placement: NotificationPlacement) => {
            if(alert.message === "") return;
            api[typeAlert[alert.type]]({
              message: `Notificación`,
              description: (
                <div>
                  <p>{message}</p>
                </div>
              ),
              placement,
            });
          
                
          };

          React.useEffect(() => {
            console.log('entre a notificacion');
            
            if (alert) {
              openNotification("topRight");
            }
          }
            ,[alert]);
            return (
                <>
                    {contextHolder}
                </>
                );

}
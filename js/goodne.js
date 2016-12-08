$(document).ready(function(){
    //nav1
    $(".head1 .hBnn_li1").each(function(index){
        $(this).hover(function(){
            $(".head1 .hBnn_ul1").eq(index).css("display","block");
        },function(){
            $(".head1 .hBnn_ul1").eq(index).css("display","none");
        })
    })
    $(".head1 .hBnn_ul1:eq(1) .hBnn_li2").each(function(index){
        $(this).hover(function(){
            $(".head1 .hBnn_ul2").eq(index).css("display","block");
        },function(){
            $(".head1 .hBnn_ul2").eq(index).css("display","none");
        })
    })
    //nav2
    $(".head2 .hBnn_li1").each(function(index){
        $(this).hover(function(){
            $(".head2 .hBnn_ul1").eq(index).css("display","block");
        },function(){
            $(".head2 .hBnn_ul1").eq(index).css("display","none");
        })
    })
    $(".head2 .hBnn_ul1:eq(1) .hBnn_li2").each(function(index){
        $(this).hover(function(){
            $(".head2 .hBnn_ul2").eq(index).css("display","block");
        },function(){
            $(".head2 .hBnn_ul2").eq(index).css("display","none");
        })
    })
//  nav4
    $(".head4 .hBnn_li1").each(function(index){
        $(this).hover(function(){
            $(".head4 .hBnn_ul1").eq(index).css("display","block");
        },function(){
            $(".head4 .hBnn_ul1").eq(index).css("display","none");
        })
    })
    $(".head4 .hBnn_ul1:eq(1) .hBnn_li2").each(function(index){
        $(this).hover(function(){
            $(".head4 .hBnn_ul2").eq(index).css("display","block");
        },function(){
            $(".head4 .hBnn_ul2").eq(index).css("display","none");
        })
    })
    //xuanxiangke
    $(".WCU_nav li").each(function(index){
        $(this).click(function(){
            $(".WCU_nav li").removeClass("WCUN_first")
            $(".WCU_nr_wen").removeClass("xian")
            $(".WCU_nav li").eq(index).addClass("WCUN_first")
            $(".WCU_nr_wen").eq(index).addClass("xian")
        })
        
    })
    //you
    var n=0;
    var next=0;
    var t=setInterval(move,2000);
    function move(){
        next=n+1;
        if(next>$(".WCSB_wen").length-1){
            next=0;
        }
        $(".WCSB_wen").eq(n).css({"opacity":"0","display":"none"});
        $(".WCSB_wen").eq(next).css({"opacity":"1","display":"block"});
        n=next;
    }
    //--------------------------------------------------------------------
    $(".ls-layer").css("display","none").eq(0).css("display","block");
    var T=setInterval(active,3000);
    var Now=0;
    var Next=0;
    function active(){
        Next++;
        if(Next>=$(".ls-layer").length){
            Next=0;
        }
        $(".ls-layer").css("display","none").eq(Next).css("display","block");
        Now=Next;
    }
    function activeL(){
        Next--;
        if(Next<0){
            Next=$(".ls-layer").length-1;
        }
        $(".ls-layer").css("display","none").eq(Next).css("display","block");
        Now=Next;
    }
    //移入移出
    $("#banslider").mouseover(function(){
        clearInterval(T);
        $(".banzf").css("opacity",1);
        $(".banyf").css("opacity",1);
    })
    $("#banslider").mouseout(function(){
        T=setInterval(active,3000);
        $(".banzf").css("opacity",0);
        $(".banyf").css("opacity",0);
    })
    //点击事件
    $(".banzf").click(function(){
        activeL();
    })
    $(".banyf").click(function(){
        active();
    })
    if($(".ls-layer1").css("display")){
    }

    //banner
//  function yLun(img,zuo,you,box){
//      var n1=0;
//      var next1=0;
//      var t=setInterval(yilou,5000);
//      function yilou(){
//          next1=n1+1;
//          if(next1>=$(img).length){
//             next1=0;
//          }
//      
//      
//      $(img).eq(n1).removeClass("ceng").end().eq(next1).addClass("ceng");
//          if($(".bannner_tu").eq(0).hasClass("bannner_tu ceng")){   
//              $(".ban_frame").addClass("ban_frame_a");
//              $(".banner_h1_bot").addClass("banner_h1_bot_a");
//              $(".banner_h2_top").addClass("banner_h2_top_a");
//              $(".banner_h2_bot").addClass("banner_h2_bot_a");
//          }else{
//              $(".ban_frame").removeClass("ban_frame_a");
//              $(".banner_h1_bot").removeClass("banner_h1_bot_a");
//              $(".banner_h2_top").removeClass("banner_h2_top_a");
//              $(".banner_h2_bot").removeClass("banner_h2_bot_a");
//          }
//          
//         
//          if($(".bannner_tu").eq(1).hasClass("bannner_tu ceng")){
//              $(".ban_device1").addClass("ban_device1_a");
//                  $(".ban_device2").addClass("ban_device2_a");
//                  $(".banner_h1_top1").addClass("banner_h1_top1_a");
//                  $(".banner_h1_bot1").addClass("banner_h1_bot1_a");
//                  $(".banner_h2_top1").addClass("banner_h2_top1_a");
//                  $(".banner_h2_zhong1").addClass("banner_h2_zhong1_a");
//                  $(".banner_h2_bot1").addClass("banner_h2_bot1_a");
//          }else{
//              $(".ban_device1").removeClass("ban_device1_a");
//              $(".ban_device2").removeClass("ban_device2_a");
//              $(".banner_h1_top1").removeClass("banner_h1_top1_a");
//              $(".banner_h1_bot1").removeClass("banner_h1_bot1_a");
//              $(".banner_h2_top1").removeClass("banner_h2_top1_a");
//              $(".banner_h2_zhong1").removeClass("banner_h2_zhong1_a");
//              $(".banner_h2_bot1").removeClass("banner_h2_bot1_a");
//          }
//          if($(".bannner_tu").eq(2).hasClass("bannner_tu ceng")){
//                  $(".ban_pc").addClass("ban_pc_a");
//                  $(".ban_log1").addClass("ban_log1_a");
//                  $(".ban_x").addClass("ban_x_a");
//                  $(".banner_tu_h2").addClass("banner_tu_h2_a");
//                  $(".banner_h1_bot2").addClass("banner_h1_bot2_a");
//                  $(".banner_h2_top2").addClass("banner_h2_top2_a");
//                  $(".banner_h2_bot2").addClass("banner_h2_bot2_a");
//          }else{
//                  $(".ban_pc").removeClass("ban_pc_a");
//                  $(".ban_log1").removeClass("ban_log1_a");
//                  $(".ban_x").removeClass("ban_x_a");
//                  $(".banner_tu_h2").removeClass("banner_tu_h2_a");
//                  $(".banner_h1_bot2").removeClass("banner_h1_bot2_a");
//                  $(".banner_h2_top2").removeClass("banner_h2_top2_a");
//                  $(".banner_h2_bot2").removeClass("banner_h2_bot2_a");
//          }
//          if($(".bannner_tu").eq(3).hasClass("bannner_tu ceng")){    
//              $(".ban_haze").addClass("ban_haze_a");
//                  $(".ban_cloud1").addClass("ban_cloud1_a");
//                  $(".ban_cloud2").addClass("ban_cloud2_a");
//                  $(".ban_plane1").addClass("ban_plane1_a");
//                  $(".ban_plane2").addClass("ban_plane2_a");
//                  $(".banner_h1_bot3").addClass("banner_h1_bot3_a");
//                  $(".banner_h2_top3").addClass("banner_h2_top3_a");
//                  $(".banner_h2_bot3").addClass("banner_h2_bot3_a");
//          }else{
//              
//              $(".ban_haze").removeClass("ban_haze_a");
//                  $(".ban_cloud1").removeClass("ban_cloud1_a");
//                  $(".ban_cloud2").removeClass("ban_cloud2_a");
//                  $(".ban_plane1").removeClass("ban_plane1_a");
//                  $(".ban_plane2").removeClass("ban_plane2_a");
//                  $(".banner_h1_bot3").removeClass("banner_h1_bot3_a");
//                  $(".banner_h2_top3").removeClass("banner_h2_top3_a");
//                  $(".banner_h2_bot3").removeClass("banner_h2_bot3_a");
//          } 
//          n1=next1;
//      }
//      $(box).hover(function(){
//          clearInterval(t);
//      },function(){
//          t=setInterval(yilou,5000);
//      })
//      $(zuo).click(function(){
//          next1=n1-1;
//          if(next1<0){
//              next1=$(img).length-1;
//          }
//          $(img).eq(n1).removeClass("ceng").end().eq(next1).addClass("ceng");
//              if($(".bannner_tu").eq(0).hasClass("bannner_tu ceng")){   
//              $(".ban_frame").addClass("ban_frame_a");
//              $(".banner_h1_bot").addClass("banner_h1_bot_a");
//              $(".banner_h2_top").addClass("banner_h2_top_a");
//              $(".banner_h2_bot").addClass("banner_h2_bot_a");
//          }else{
//              $(".ban_frame").removeClass("ban_frame_a");
//              $(".banner_h1_bot").removeClass("banner_h1_bot_a");
//              $(".banner_h2_top").removeClass("banner_h2_top_a");
//              $(".banner_h2_bot").removeClass("banner_h2_bot_a");
//          }
//          
//         
//          if($(".bannner_tu").eq(1).hasClass("bannner_tu ceng")){
//              $(".ban_device1").addClass("ban_device1_a");
//                  $(".ban_device2").addClass("ban_device2_a");
//                  $(".banner_h1_top1").addClass("banner_h1_top1_a");
//                  $(".banner_h1_bot1").addClass("banner_h1_bot1_a");
//                  $(".banner_h2_top1").addClass("banner_h2_top1_a");
//                  $(".banner_h2_zhong1").addClass("banner_h2_zhong1_a");
//                  $(".banner_h2_bot1").addClass("banner_h2_bot1_a");
//          }else{
//              $(".ban_device1").removeClass("ban_device1_a");
//              $(".ban_device2").removeClass("ban_device2_a");
//              $(".banner_h1_top1").removeClass("banner_h1_top1_a");
//              $(".banner_h1_bot1").removeClass("banner_h1_bot1_a");
//              $(".banner_h2_top1").removeClass("banner_h2_top1_a");
//              $(".banner_h2_zhong1").removeClass("banner_h2_zhong1_a");
//              $(".banner_h2_bot1").removeClass("banner_h2_bot1_a");
//          }
//          if($(".bannner_tu").eq(2).hasClass("bannner_tu ceng")){
//                  $(".ban_pc").addClass("ban_pc_a");
//                  $(".ban_log1").addClass("ban_log1_a");
//                  $(".ban_x").addClass("ban_x_a");
//                  $(".banner_tu_h2").addClass("banner_tu_h2_a");
//                  $(".banner_h1_bot2").addClass("banner_h1_bot2_a");
//                  $(".banner_h2_top2").addClass("banner_h2_top2_a");
//                  $(".banner_h2_bot2").addClass("banner_h2_bot2_a");
//          }else{
//                  $(".ban_pc").removeClass("ban_pc_a");
//                  $(".ban_log1").removeClass("ban_log1_a");
//                  $(".ban_x").removeClass("ban_x_a");
//                  $(".banner_tu_h2").removeClass("banner_tu_h2_a");
//                  $(".banner_h1_bot2").removeClass("banner_h1_bot2_a");
//                  $(".banner_h2_top2").removeClass("banner_h2_top2_a");
//                  $(".banner_h2_bot2").removeClass("banner_h2_bot2_a");
//          }
//          if($(".bannner_tu").eq(3).hasClass("bannner_tu ceng")){    
//              $(".ban_haze").addClass("ban_haze_a");
//                  $(".ban_cloud1").addClass("ban_cloud1_a");
//                  $(".ban_cloud2").addClass("ban_cloud2_a");
//                  $(".ban_plane1").addClass("ban_plane1_a");
//                  $(".ban_plane2").addClass("ban_plane2_a");
//                  $(".banner_h1_bot3").addClass("banner_h1_bot3_a");
//                  $(".banner_h2_top3").addClass("banner_h2_top3_a");
//                  $(".banner_h2_bot3").addClass("banner_h2_bot3_a");
//          }else{
//              
//              $(".ban_haze").removeClass("ban_haze_a");
//                  $(".ban_cloud1").removeClass("ban_cloud1_a");
//                  $(".ban_cloud2").removeClass("ban_cloud2_a");
//                  $(".ban_plane1").removeClass("ban_plane1_a");
//                  $(".ban_plane2").removeClass("ban_plane2_a");
//                  $(".banner_h1_bot3").removeClass("banner_h1_bot3_a");
//                  $(".banner_h2_top3").removeClass("banner_h2_top3_a");
//                  $(".banner_h2_bot3").removeClass("banner_h2_bot3_a");
//          } 
//          n1=next1;
//      })
//      $(you).click(function(){
//           yilou();
//      })
//      
//  }
//  yLun($(".bannner_tu"),$(".ban_left"),$(".ban_right"),$(".banner"))
//          if($(".bannner_tu").eq(0).hasClass("bannner_tu ceng")){   
//              $(".ban_frame").addClass("ban_frame_a");
//              $(".banner_h1_bot").addClass("banner_h1_bot_a");
//              $(".banner_h2_top").addClass("banner_h2_top_a");
//              $(".banner_h2_bot").addClass("banner_h2_bot_a");
//          }else{
//              $(".ban_frame").removeClass("ban_frame_a");
//              $(".banner_h1_bot").removeClass("banner_h1_bot_a");
//              $(".banner_h2_top").removeClass("banner_h2_top_a");
//              $(".banner_h2_bot").removeClass("banner_h2_bot_a");
//          }
//  
//  var n1=0;
//  var next1=0;
    
    
//  头部
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>165){
            if($(window).width()>760){
                $(".head4").css({"display":"block","height":"auto"});
            }else{
                $(".head5").css({"display":"block","height":"auto"});
            }  
        }else if(top==0){
            $(".head4").css({"display":"none","height":"0"});
            $(".head5").css({"display":"none","height":"0"});
        }else{
            if($(window).width()>760){
                $(".head5").css({"display":"none","height":"0"});
            }else{
                $(".head4").css({"display":"none","height":"0"});
            }
            
        }
    })
    
    //lunbo
    $(".recentw_anL").click(function(){
        console.log(1)
        $(".rwB_box").css("transform","translate(220px)");
    })
    $(".recentw_anR").click(function(){
        console.log(2)
        $(".rwB_box").css("transform","translate(-220px)");
    })
    

    
    
    
    
    
    
    
    
    
    
})

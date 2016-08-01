<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace plugins\Share\Controller; //Share插件英文名，改成你的插件英文就行了
use Api\Controller\PluginController;//插件控制器基类

class IndexController extends PluginController{
	
	function index(){
		//$plugin_Share_model=D("plugins://Share/PluginShare");//实例化自定义模型PluginShare ,需要创建plugin_Share表
		//$plugin_Share_model->test();//调用自定义模型PluginShare里的test方法
		
		$users_model=D("Users");//实例化Common模块下的Users模型
		//$users_model=D("Common/Users");//也可以这样实例化Common模块下的Users模型
		$users=$users_model->limit(0,5)->select();
		
		$this->assign("users",$users);
		
		$this->display(":index");
	}

}

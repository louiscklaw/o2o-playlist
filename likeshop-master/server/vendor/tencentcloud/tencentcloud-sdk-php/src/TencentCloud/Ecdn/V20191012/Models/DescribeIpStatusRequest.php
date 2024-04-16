<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Ecdn\V20191012\Models;
use TencentCloud\Common\AbstractModel;

/**
 * DescribeIpStatus请求参数结构体
 *
 * @method string getDomain() 获取加速域名
 * @method void setDomain(string $Domain) 设置加速域名
 * @method string getArea() 获取查询区域：
mainland: 国内节点
overseas: 海外节点
global: 全球节点
 * @method void setArea(string $Area) 设置查询区域：
mainland: 国内节点
overseas: 海外节点
global: 全球节点
 */
class DescribeIpStatusRequest extends AbstractModel
{
    /**
     * @var string 加速域名
     */
    public $Domain;

    /**
     * @var string 查询区域：
mainland: 国内节点
overseas: 海外节点
global: 全球节点
     */
    public $Area;

    /**
     * @param string $Domain 加速域名
     * @param string $Area 查询区域：
mainland: 国内节点
overseas: 海外节点
global: 全球节点
     */
    function __construct()
    {

    }

    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("Domain",$param) and $param["Domain"] !== null) {
            $this->Domain = $param["Domain"];
        }

        if (array_key_exists("Area",$param) and $param["Area"] !== null) {
            $this->Area = $param["Area"];
        }
    }
}

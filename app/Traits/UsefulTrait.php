<?php

namespace App\Traits;

trait UsefulTrait
{
    /**
     * 正規表現にマッチする定義されたものを配列として返す.
     * @param string 正規表現
     * @return array
     */
    public function getConstArray($reg)
    {
        $result = [];
        $class = new ReflectionClass(__CLASS__);
        $consts = $class->getConstants();
        foreach ($consts as $key => $value) {
            if (preg_match($reg, $key)) {
                $result[] = $value;
            }
        }

        return $result;
    }
}

package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Click;

public interface IStaService {
	public List<Click> getDateList(Map map);
	public List<Integer> selectAllNationIdxs(String username);
	public int getClickSum(int nationIdx);
	public int getQrSum(int nationIdx);
	public int getClickSum(Map map);
	public int getQrSum(Map map);
	public boolean vernation(Map map);
	public boolean verUser(String username);
	public String selectUser(int nationIdx);
}

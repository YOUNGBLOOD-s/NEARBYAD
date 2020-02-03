package com.yb.rest.service;

import java.util.ArrayList;

import com.yb.rest.vo.Nation;

public interface IManService {
	public int getIdx(String username);
	
	public ArrayList<Nation> nationList(int customer);
	
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String clickcnt, String showcnt,
			String customer, String weight, String speech, String price);
	
	public boolean nationdelete(int customer);
	
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String clickcnt, String showcnt,
			String customer, String weight, String speech, String price);
}

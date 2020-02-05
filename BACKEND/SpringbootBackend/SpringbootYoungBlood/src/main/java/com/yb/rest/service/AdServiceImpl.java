package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IAdDao;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.Route;
import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

@Service
public class AdServiceImpl implements IAdService {

	@Autowired
	IAdDao repo;

	@Override
	public List<String> getImgs(int id) {
		return repo.getImgs(id);
	}

	@Override
	public List<String> getModalcontents(int id) {
		return repo.getModalcontents(id);
	}

	@Override
	public Sendtofront getInfo(Map value) {
		return repo.getInfo(value);
	}

	@Override
	public void updateSensor(Sensor sen) {
		repo.updateSensor(sen);
	}

	@Override
	public List<Route> getRoutes(int idx) {
		return repo.getRoutes(idx);
	}

	@Override
	public Nation getNationdetail(Map value) {
		return repo.getNationdetail(value);
	}

	@Override
	public void updateScore(ForScore forScore) {
		repo.updateScore(forScore);
	}

	@Override
	public int getScore(int idx) {
		return repo.getScore(idx);
	}

	@Override
	public int getDust(int idx) {
		return repo.getDust(idx);
	}

	@Override
	public List<Monthtb> selectAll() {
		return repo.selectall();
	}

	@Override
	public Sensor selectData(int idx) {
		return repo.selectData(idx);
	}

	@Override
	public void updateType(ForScore forScore) {
		repo.updateType(forScore);
	}

	@Override
	public int getType(int idx) {
		return repo.getType(idx);
	}

	@Override
	public void updateClickcnt(Map map) {
		repo.updateClickcnt(map);
	}

	@Override
	public void updateShowcnt(int idx) {
		repo.updateShowcnt(idx);
	}

	@Override
	public Nation getNationdetail(int idx) {
		return repo.getNationdetail(idx);
	}

	@Override
	public void updateCounsel(int age, String name, String email, String tel, String date, String text) {
		repo.updateCounsel(new Counsel(age, name, email, tel, date, text));
	}

	@Override
	public List<Route> getRoutes(String customer) {
		return repo.getRoutes(customer);
	}

	@Override
	public List<Route> getRoutesAll(int idx) {
		return repo.getRoutesAll(idx);
	}

	@Override
	public void insertRoutes(Route route) {
		repo.insertRoutes(route);
	}

	@Override
	public void updateRoutes(Route route) {
		repo.updateRoutes(route);
	}

	@Override
	public void deleteRoutes(Map map) {
		repo.deleteRoutes(map);
	}

	@Override
	public int selectShowcnt(int idx) {
		return repo.selectShowcnt(idx);
	}

	@Override
	public void updateFlag(int idx) {
		repo.updateFlag(idx);
	}

	@Override
	public List<Nation> selectNations() {
		// TODO Auto-generated method stub
		return repo.selectNations();
	public boolean getDate(Map map) {
		return repo.getDate(map);
	}

	@Override
	public void insertClick(Map map) {
		repo.insertClick(map);
	}

	@Override
	public void updateQRcnt(Map map) {
		repo.updateQRcnt(map);
	}

	@Override
	public void insertQR(Map map) {
		repo.insertQR(map);
	}
}

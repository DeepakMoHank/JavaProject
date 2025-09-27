package com.lostfound.controller;

import com.lostfound.model.Item;
import com.lostfound.repository.ItemRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "*")
public class ItemController {

    private final ItemRepository repo;

    public ItemController(ItemRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Item addItem(@RequestBody Item item) {
        return repo.save(item);
    }

    @GetMapping
    public List<Item> getItems() {
        return repo.findAll();
    }

    @GetMapping("/search")
    public List<Item> searchItems(@RequestParam String keyword) {
        return repo.findByNameContaining(keyword);
    }
}
